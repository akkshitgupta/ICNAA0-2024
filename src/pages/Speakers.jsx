import Speakers from "../components/Speakers";

function SpeakersPage() {
    return (
        <div className="flex flex-col items-center bg-black pt-20 w-screen">
            <div className="flex flex-col items-center w-full">
                <Speakers />
            </div>
        </div>
    );
}

export default SpeakersPage;
