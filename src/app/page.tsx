import SingleJob from "@/components/custom/SingleJob";
import prisma from "@/lib/prisma";
export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      {jobs.map((job) => (
        <SingleJob key={job.id} job={job} />
      ))}
    </>
  );
}
