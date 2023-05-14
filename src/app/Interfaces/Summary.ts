export interface Summary {
    photo: string, 
    title: string, 
    hardskills: [{
            descriptive_name: string, 
            description: string, 
            subskills: [{
                descriptive_name: string, 
                description: string}]
        }]
    softskills: [{
            descriptive_name: string, 
            description: string,
            subskills: [{
                descriptive_name: string, 
                description: string}]
    }], 
    last_experience: {
        company: string, 
        started: Date, 
        end: Date, 
        position: string, 
        description: string}
}