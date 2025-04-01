// src/app/join/page.tsx
import PageLayout from "@/components/layout/PageLayout";
import JoinContent from "./JoinContent"; // Import the new client component

// Keep metadata export here - this remains a Server Component feature
export const metadata = {
    title: "Join The Quest | AbtalQuest",
    description: "Embark on an adventure to build resilience, discipline, and positive habits with AbtalQuest. Join our community today!",
};

// This is now a simple Server Component
export default function JoinPage() {
    return (
        <PageLayout>
            {/* Render the Client Component containing the actual page content */}
            <JoinContent />
        </PageLayout>
    );
}
