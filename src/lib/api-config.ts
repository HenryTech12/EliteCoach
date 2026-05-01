// API base URLs for the EliteCoach microservices.
// These are the live deployed services from the spec.
export const API_URLS = {
    identity: "https://elitecoach-ai-r05o.onrender.com",
    aiTutor: "https://elitecoach-ai-2-ih4m.onrender.com", // Correct AI Tutor URL
    assessments: "https://elitecoach-ai-2-ih4m.onrender.com", // Tutor-provided quiz generator
    acs: "https://elitecoach-ai-acs.onrender.com", // Assessment & Certification Service (Service D)
    content: "https://elitecoach-ai-ccms.onrender.com", // Content and Curriculum Service (Service C)
    notifications: "https://elitecoach-ai-1-2qbv.onrender.com",
} as const;
