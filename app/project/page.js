import Image from 'next/image';
export const metadata = {
    title: 'My Projects',
    description: 'Leo Tuan Dinh - Web3 Fullstack Developer'
};
function page() {
    return (
        <div className="flex flex-col items-center mt-10 w-full">
            <Image
                src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/bb375cdd655184ca2715ac5059e73651-YX4ZEeZEvbhrMMZa.gif"
                alt="working"
                height={500}
                width={500}
                unoptimized={true}
            />
            <h1 className="text-center  text-2xl text-(--text-dark-color) dark:text-(--text-light-color)">
                Here is where I am showing my personal projects
            </h1>
        </div>
    );
}

export default page;
