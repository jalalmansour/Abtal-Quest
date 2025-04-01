import PageLayout from "@/components/layout/PageLayout";
import TeamContent from "./TeamContent"; // Corrected import path

// Keep metadata export here - this file is now a Server Component
export const metadata = {
    title: "Our Team | AbtalQuest",
    description: "Meet the team behind AbtalQuest, building resilience and positive habits in children.",
};

// This is now a simple Server Component
export default function TeamPage() {
    return (
        <PageLayout>
            <TeamContent /> {/* Render the Client Component */}
        </PageLayout>
    );
}
