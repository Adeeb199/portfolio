import ProjectDetail from "./ProjectDetail";

// 1️⃣ Must be server component
export async function generateStaticParams() {
  const ids = [
    "brand-identity",
    "social-app",
    "creative-studio",
    "marketing-dashboard",
    "product-landing",
    "startup-mobile",
    "modern-saas",
  ];

  return ids.map((id) => ({ id }));
}


// ✅ Fix: make the function async and await params
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // unwrap the Promise
  return <ProjectDetail id={id} />;
}
