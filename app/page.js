import HomeIntro from './_components/homeIntro';

export const metadata = {
    title: 'Leo',
    description: 'Leo Tuan Dinh - Full-Stack Developer'
};

function App() {
    return (
        <div className="flex w-full flex-col">
            <HomeIntro />
        </div>
    );
}

export default App;
