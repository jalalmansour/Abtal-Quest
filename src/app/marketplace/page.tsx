// src/app/marketplace/page.tsx
import PageLayout from "@/components/layout/PageLayout";
import MarketplaceContent from "./MarketplaceContent"; // Import the client component

export const metadata = {
    title: "Reward Zone | AbtalQuest Marketplace",
    description: "Spend your hard-earned AbtalQuest points on cool avatar items, real-world rewards, and digital goodies in the marketplace.",
};

export default function MarketplacePage() {
    return (
        <PageLayout>
            <MarketplaceContent />
        </PageLayout>
    );
}
