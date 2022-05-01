import express from 'express';
const app = express();
app.use(express.json());
const PORT = process.env.HTTP_PORT || 3000

// Your code starts here. Placeholders for .get and .post are provided for your convenience.

// Create database

interface Candidate {
    id: string,
    name: string,
    skills: string[]
}

interface Counter {
    [key: string]: number
}

let candidates: Candidate[] = [
    {
        id: "0facd8d3-4361-4ab7-8921-3d57a73b796a",
        name: "Diana Lenz",
        skills: ["scala","golang"]
    }
];

app.use(express.json());

app.post('', function(req, res) {
    try {
        // Find name and skills in request body
        const name = req.body.name;
        const skills = req.body.skills;

        // Verify name and skills
        if (name && skills.length > 0) {
            // Create new id
            const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            
            // Create new Candidate
            const newCandidate: Candidate = {
                id,
                name,
                skills: skills.map((skill: string) => skill.toLowerCase())
            };
            candidates.push(newCandidate);
            res.status(201).send(newCandidate);
        } else {
            throw new Error("Missing name or skills");
        }
    } catch (error:any) {
        res.status(400).send(error.message);
    }
});

app.get('', function(req, res) {
    try {
        // Find skills in request body
        const reqSkills = req.body.skills;
        
        // Verify skills
        if (reqSkills.length > 0) {
            // Create an object with required skills as keys
            let reqSkillsCounter: Counter = {};
            reqSkills.forEach((skill:string) => reqSkillsCounter[skill.toLowerCase()] = 1);
           
            // Create an object with candidates as keys and number of matching skills as values
            let skillsCount: Counter = {};
            candidates.forEach((candidate:Candidate) => {
                skillsCount[candidate.id] = 0;
                candidate.skills.forEach((skill:string) => {
                    // If skill is in required skills, increment counter
                    if (reqSkillsCounter[skill]) {
                        skillsCount[candidate.id]++;
                    }
                });
            });

            // Find the candidate with the most matching skills
            const max = Math.max(...Object.values(skillsCount));
            let bestCandidates:Candidate[] = [];
            if (max > 0) {
                bestCandidates = candidates.filter((candidate:Candidate) => skillsCount[candidate.id] === max);
            }
            res.send({bestCandidates});
        } else {
            throw new Error("Missing skills");
        }
    } catch (error:any) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT).on('listening', () => {
    console.info('Listening on port', PORT)
});