import CarouselDApiDemo from "./Carousel";
import {
    KeyNoteSpeakerCards,
    PatronSpeakerCards,
    HonoraryChairSpeakerCards,
    OrganisingChairCards,
    GeneralChairCards,
    OrganisinSecCards,
    FinanceChairCards,
} from "./staticSpeakerData";

export default function Speakers() {
    return (
        <div
            id="speakers"
            className={
                " items-center flex w-full  flex-col  gap-0 bg-black relative overflow-hidden h-full px-4 max-w-7xl  text-white"
            }
        >
            <div className="divider lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
                Speakers
            </div>
            <CarouselDApiDemo carouselItems={KeyNoteSpeakerCards} />
            <div className="divider divider-secondary lg:text-3xl md:text-2xl text-xl font-bold uppercase lg:my-10 my-5">
                Comittee
            </div>

            <div className=" lg:text-xl md:text-lg text-base font-bold uppercase lg:my-7 my-3">
                Patrons
            </div>
            <CarouselDApiDemo carouselItems={PatronSpeakerCards} />
            <div className=" lg:text-xl md:text-lg text-base font-bold uppercase lg:my-7 my-3">
                Honorary Chairs
            </div>
            <CarouselDApiDemo carouselItems={HonoraryChairSpeakerCards} />
            <div className=" lg:text-xl md:text-lg text-base font-bold uppercase lg:my-7 my-3">
                Organising Chairs
            </div>
            <CarouselDApiDemo carouselItems={OrganisingChairCards} />
            <div className=" lg:text-xl md:text-lg text-base font-bold uppercase lg:my-7 my-3">
                General Chairs
            </div>
            <CarouselDApiDemo carouselItems={GeneralChairCards} />
            <div className=" lg:text-xl md:text-lg text-base font-bold uppercase lg:my-7 my-3">
                Finance Chair
            </div>
            <CarouselDApiDemo carouselItems={FinanceChairCards} />
            <div className=" lg:text-xl md:text-lg text-base font-bold uppercase lg:my-7 my-3">
                Organising Secretaries
            </div>
            <CarouselDApiDemo carouselItems={OrganisinSecCards} />
        </div>
    );
}
