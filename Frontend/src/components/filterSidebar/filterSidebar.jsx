import { useFilter } from "../providers/filter";

// SVG Components
const BagageSmallIcon = ({ isSelected }) => (
    <svg
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        className={`w-6 h-6 ${isSelected ? 'stroke-blue-bright' : 'stroke-gray-400'}`}
    >
        <path d="M2.25 5.08366V4.66699C2.25 4.28033 2.25 4.08616 2.26667 3.92366C2.34217 3.15622 2.68143 2.43871 3.22663 1.89336C3.77183 1.348 4.48925 1.00855 5.25667 0.932826C5.41917 0.916992 5.61333 0.916992 6 0.916992C6.38667 0.916992 6.58083 0.916992 6.74333 0.933659C7.51077 1.00917 8.22828 1.34842 8.77364 1.89362C9.31899 2.43883 9.65845 3.15625 9.73417 3.92366C9.75 4.08616 9.75 4.28033 9.75 4.66699V5.08366M8.91667 9.25033V7.58366M3.08333 9.25033V7.58366" stroke-linecap="round" />
        <path d="M0.583496 8.08398C0.583496 6.66982 0.583496 5.96232 1.02266 5.52315C1.46183 5.08398 2.16933 5.08398 3.5835 5.08398H8.41683C9.831 5.08398 10.5385 5.08398 10.9777 5.52315C11.4168 5.96232 11.4168 6.66982 11.4168 8.08398V10.084C11.4168 12.4407 11.4168 13.6198 10.6843 14.3515C9.95266 15.084 8.7735 15.084 6.41683 15.084H5.5835C3.22683 15.084 2.04766 15.084 1.316 14.3515C0.583496 13.6198 0.583496 12.4407 0.583496 10.084V8.08398Z" />

    </svg>
);

const BagageMediumIcon = ({ isSelected }) => (
    <svg
        width="12"
        height="19"
        viewBox="0 0 12 19"
        fill="none"
        className={`w-6 h-6 ${isSelected ? 'stroke-blue-bright' : 'stroke-gray-400'}`}
    >
        <path d="M2.5 16.5V17.5C2.5 17.7652 2.60536 18.0196 2.79289 18.2071C2.98043 18.3946 3.23478 18.5 3.5 18.5C3.76522 18.5 4.01957 18.3946 4.20711 18.2071C4.39464 18.0196 4.5 17.7652 4.5 17.5V16.5M7.5 16.5V17.5C7.5 17.7652 7.60536 18.0196 7.79289 18.2071C7.98043 18.3946 8.23478 18.5 8.5 18.5C8.76522 18.5 9.01957 18.3946 9.20711 18.2071C9.39464 18.0196 9.5 17.7652 9.5 17.5V16.5M3.5 4.5V1.5C3.5 1.23478 3.60536 0.98043 3.79289 0.792893C3.98043 0.605357 4.23478 0.5 4.5 0.5H7.5C7.76522 0.5 8.01957 0.605357 8.20711 0.792893C8.39464 0.98043 8.5 1.23478 8.5 1.5V4.5M0.5 5.5C0.5 5.23478 0.605357 4.98043 0.792893 4.79289C0.98043 4.60536 1.23478 4.5 1.5 4.5H10.5C10.7652 4.5 11.0196 4.60536 11.2071 4.79289C11.3946 4.98043 11.5 5.23478 11.5 5.5V15.5C11.5 15.7652 11.3946 16.0196 11.2071 16.2071C11.0196 16.3946 10.7652 16.5 10.5 16.5H1.5C1.23478 16.5 0.98043 16.3946 0.792893 16.2071C0.605357 16.0196 0.5 15.7652 0.5 15.5V5.5Z" stroke-linecap="round" stroke-linejoin="round" />

    </svg>
);

const BagageLargeIcon = ({ isSelected }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={`w-6 h-6 stroke-1 ${isSelected ? 'stroke-blue-bright ' : 'stroke-gray-400'}`}
    >
        <mask id="path-1-inside-1_1715_5440" fill="white">
            <path d="M5 2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0L9 0C9.53043 0 10.0391 0.210714 10.4142 0.585786C10.7893 0.960859 11 1.46957 11 2H14.5C14.8978 2 15.2794 2.15804 15.5607 2.43934C15.842 2.72064 16 3.10218 16 3.5V12.5C16 12.8978 15.842 13.2794 15.5607 13.5607C15.2794 13.842 14.8978 14 14.5 14H14C14 14.1326 13.9473 14.2598 13.8536 14.3536C13.7598 14.4473 13.6326 14.5 13.5 14.5C13.3674 14.5 13.2402 14.4473 13.1464 14.3536C13.0527 14.2598 13 14.1326 13 14H3C3 14.1326 2.94732 14.2598 2.85355 14.3536C2.75979 14.4473 2.63261 14.5 2.5 14.5C2.36739 14.5 2.24021 14.4473 2.14645 14.3536C2.05268 14.2598 2 14.1326 2 14H1.5C1.10218 14 0.720644 13.842 0.43934 13.5607C0.158035 13.2794 0 12.8978 0 12.5L0 3.5C0 3.10218 0.158035 2.72064 0.43934 2.43934C0.720644 2.15804 1.10218 2 1.5 2H5ZM6 2H10C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2ZM1.5 3C1.36739 3 1.24021 3.05268 1.14645 3.14645C1.05268 3.24021 1 3.36739 1 3.5V12.5C1 12.6326 1.05268 12.7598 1.14645 12.8536C1.24021 12.9473 1.36739 13 1.5 13H3V3H1.5ZM15 12.5V3.5C15 3.36739 14.9473 3.24021 14.8536 3.14645C14.7598 3.05268 14.6326 3 14.5 3H13V13H14.5C14.6326 13 14.7598 12.9473 14.8536 12.8536C14.9473 12.7598 15 12.6326 15 12.5ZM12 13V3H4V13H12Z" />
        </mask>
        <path d="M5 2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0L9 0C9.53043 0 10.0391 0.210714 10.4142 0.585786C10.7893 0.960859 11 1.46957 11 2H14.5C14.8978 2 15.2794 2.15804 15.5607 2.43934C15.842 2.72064 16 3.10218 16 3.5V12.5C16 12.8978 15.842 13.2794 15.5607 13.5607C15.2794 13.842 14.8978 14 14.5 14H14C14 14.1326 13.9473 14.2598 13.8536 14.3536C13.7598 14.4473 13.6326 14.5 13.5 14.5C13.3674 14.5 13.2402 14.4473 13.1464 14.3536C13.0527 14.2598 13 14.1326 13 14H3C3 14.1326 2.94732 14.2598 2.85355 14.3536C2.75979 14.4473 2.63261 14.5 2.5 14.5C2.36739 14.5 2.24021 14.4473 2.14645 14.3536C2.05268 14.2598 2 14.1326 2 14H1.5C1.10218 14 0.720644 13.842 0.43934 13.5607C0.158035 13.2794 0 12.8978 0 12.5L0 3.5C0 3.10218 0.158035 2.72064 0.43934 2.43934C0.720644 2.15804 1.10218 2 1.5 2H5ZM6 2H10C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2ZM1.5 3C1.36739 3 1.24021 3.05268 1.14645 3.14645C1.05268 3.24021 1 3.36739 1 3.5V12.5C1 12.6326 1.05268 12.7598 1.14645 12.8536C1.24021 12.9473 1.36739 13 1.5 13H3V3H1.5ZM15 12.5V3.5C15 3.36739 14.9473 3.24021 14.8536 3.14645C14.7598 3.05268 14.6326 3 14.5 3H13V13H14.5C14.6326 13 14.7598 12.9473 14.8536 12.8536C14.9473 12.7598 15 12.6326 15 12.5ZM12 13V3H4V13H12Z" />
        <path d="M5 2V3H6V2H5ZM7 0V-1V0ZM11 2H10V3H11V2ZM16 3.5H17H16ZM16 12.5H17H16ZM14 14V13H13V14H14ZM13 14H14V13H13V14ZM3 14V13H2V14H3ZM2 14H3V13H2V14ZM1.5 14V15V14ZM0 12.5H-1H0ZM0 3.5H-1H0ZM6 2H5V3H6V2ZM10 2V3H11V2H10ZM9 1V0V1ZM7 1V0V1ZM1 3.5H0H1ZM1 12.5H0H1ZM3 13V14H4V13H3ZM3 3H4V2H3V3ZM13 3V2H12V3H13ZM13 13H12V14H13V13ZM12 13V14H13V13H12ZM12 3H13V2H12V3ZM4 3V2H3V3H4ZM4 13H3V14H4V13ZM5 2H6C6 1.73478 6.10536 1.48043 6.29289 1.29289L5.58579 0.585786L4.87868 -0.12132C4.31607 0.441289 4 1.20435 4 2H5ZM5.58579 0.585786L6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1V0V-1C6.20435 -1 5.44129 -0.683929 4.87868 -0.12132L5.58579 0.585786ZM7 0V1H9V0V-1H7V0ZM9 0V1C9.26522 1 9.51957 1.10536 9.70711 1.29289L10.4142 0.585786L11.1213 -0.12132C10.5587 -0.683929 9.79565 -1 9 -1V0ZM10.4142 0.585786L9.70711 1.29289C9.89464 1.48043 10 1.73478 10 2H11H12C12 1.20435 11.6839 0.441288 11.1213 -0.12132L10.4142 0.585786ZM11 2V3H14.5V2V1H11V2ZM14.5 2V3C14.6326 3 14.7598 3.05268 14.8536 3.14645L15.5607 2.43934L16.2678 1.73223C15.7989 1.26339 15.163 1 14.5 1V2ZM15.5607 2.43934L14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5H16H17C17 2.83696 16.7366 2.20107 16.2678 1.73223L15.5607 2.43934ZM16 3.5H15V12.5H16H17V3.5H16ZM16 12.5H15C15 12.6326 14.9473 12.7598 14.8536 12.8536L15.5607 13.5607L16.2678 14.2678C16.7366 13.7989 17 13.163 17 12.5H16ZM15.5607 13.5607L14.8536 12.8536C14.7598 12.9473 14.6326 13 14.5 13V14V15C15.163 15 15.7989 14.7366 16.2678 14.2678L15.5607 13.5607ZM14.5 14V13H14V14V15H14.5V14ZM14 14H13C13 13.8674 13.0527 13.7402 13.1464 13.6464L13.8536 14.3536L14.5607 15.0607C14.842 14.7794 15 14.3978 15 14H14ZM13.8536 14.3536L13.1464 13.6464C13.2402 13.5527 13.3674 13.5 13.5 13.5V14.5V15.5C13.8978 15.5 14.2794 15.342 14.5607 15.0607L13.8536 14.3536ZM13.5 14.5V13.5C13.6326 13.5 13.7598 13.5527 13.8536 13.6464L13.1464 14.3536L12.4393 15.0607C12.7206 15.342 13.1022 15.5 13.5 15.5V14.5ZM13.1464 14.3536L13.8536 13.6464C13.9473 13.7402 14 13.8674 14 14H13H12C12 14.3978 12.158 14.7794 12.4393 15.0607L13.1464 14.3536ZM13 14V13H3V14V15H13V14ZM3 14H2C2 13.8674 2.05268 13.7402 2.14645 13.6464L2.85355 14.3536L3.56066 15.0607C3.84196 14.7794 4 14.3978 4 14H3ZM2.85355 14.3536L2.14645 13.6464C2.24022 13.5527 2.36739 13.5 2.5 13.5V14.5V15.5C2.89782 15.5 3.27935 15.342 3.56066 15.0607L2.85355 14.3536ZM2.5 14.5V13.5C2.63261 13.5 2.75978 13.5527 2.85355 13.6464L2.14645 14.3536L1.43934 15.0607C1.72065 15.342 2.10218 15.5 2.5 15.5V14.5ZM2.14645 14.3536L2.85355 13.6464C2.94732 13.7402 3 13.8674 3 14H2H1C1 14.3978 1.15804 14.7794 1.43934 15.0607L2.14645 14.3536ZM2 14V13H1.5V14V15H2V14ZM1.5 14V13C1.36739 13 1.24021 12.9473 1.14645 12.8536L0.43934 13.5607L-0.267767 14.2678C0.201074 14.7366 0.836959 15 1.5 15V14ZM0.43934 13.5607L1.14645 12.8536C1.05268 12.7598 1 12.6326 1 12.5H0H-1C-1 13.163 -0.736608 13.7989 -0.267767 14.2678L0.43934 13.5607ZM0 12.5H1V3.5H0H-1V12.5H0ZM0 3.5H1C1 3.36739 1.05268 3.24021 1.14645 3.14645L0.43934 2.43934L-0.267767 1.73223C-0.736608 2.20107 -1 2.83696 -1 3.5H0ZM0.43934 2.43934L1.14645 3.14645C1.24021 3.05268 1.36739 3 1.5 3V2V1C0.836959 1 0.201074 1.26339 -0.267767 1.73223L0.43934 2.43934ZM1.5 2V3H5V2V1H1.5V2ZM6 2V3H10V2V1H6V2ZM10 2H11C11 1.46957 10.7893 0.960859 10.4142 0.585786L9.70711 1.29289L9 2H10ZM9.70711 1.29289L10.4142 0.585786C10.0391 0.210714 9.53043 0 9 0V1V2L9.70711 1.29289ZM9 1V0H7V1V2H9V1ZM7 1V0C6.46957 0 5.96086 0.210714 5.58579 0.585786L6.29289 1.29289L7 2V1ZM6.29289 1.29289L5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2H6H7L6.29289 1.29289ZM1.5 3V2C1.10217 2 0.720644 2.15804 0.43934 2.43934L1.14645 3.14645L1.85355 3.85355C1.75979 3.94732 1.63261 4 1.5 4V3ZM1.14645 3.14645L0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5H1H2C2 3.63261 1.94732 3.75979 1.85355 3.85355L1.14645 3.14645ZM1 3.5H0V12.5H1H2V3.5H1ZM1 12.5H0C0 12.8978 0.158035 13.2794 0.43934 13.5607L1.14645 12.8536L1.85355 12.1464C1.94732 12.2402 2 12.3674 2 12.5H1ZM1.14645 12.8536L0.43934 13.5607C0.720646 13.842 1.10218 14 1.5 14V13V12C1.63261 12 1.75978 12.0527 1.85355 12.1464L1.14645 12.8536ZM1.5 13V14H3V13V12H1.5V13ZM3 13H4V3H3H2V13H3ZM3 3V2H1.5V3V4H3V3ZM15 12.5H16V3.5H15H14V12.5H15ZM15 3.5H16C16 3.10218 15.842 2.72065 15.5607 2.43934L14.8536 3.14645L14.1464 3.85355C14.0527 3.75978 14 3.63261 14 3.5H15ZM14.8536 3.14645L15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2V3V4C14.3674 4 14.2402 3.94732 14.1464 3.85355L14.8536 3.14645ZM14.5 3V2H13V3V4H14.5V3ZM13 3H12V13H13H14V3H13ZM13 13V14H14.5V13V12H13V13ZM14.5 13V14C14.8978 14 15.2794 13.842 15.5607 13.5607L14.8536 12.8536L14.1464 12.1464C14.2402 12.0527 14.3674 12 14.5 12V13ZM14.8536 12.8536L15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5H15H14C14 12.3674 14.0527 12.2402 14.1464 12.1464L14.8536 12.8536ZM12 13H13V3H12H11V13H12ZM12 3V2H4V3V4H12V3ZM4 3H3V13H4H5V3H4ZM4 13V14H12V13V12H4V13Z" mask="url(#path-1-inside-1_1715_5440)" />

    </svg>
);

export const FilterSidebar = () => {
    const {
        seats, setSeats,
        bagageSmall, setBagageSmall,
        bagageMedium, setBagageMedium,
        bagageLarge, setBagageLarge,
        comfort, setComfort,
        music, setMusic,
        animalsAllowed, setAnimalsAllowed,
        childrenAllowed, setChildrenAllowed,
        smokingAllowed, setSmokingAllowed
    } = useFilter();

    const clearAllFilters = () => {
        setSeats(1);
        setBagageSmall(false);
        setBagageMedium(false);
        setBagageLarge(false);
        setComfort(false);
        setMusic(false);
        setAnimalsAllowed(false);
        setChildrenAllowed(false);
        setSmokingAllowed(false);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-[240px] h-fit">


            {/* Antal pladser */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <div className="flex justify-between items-baseline">
                    <p className="text-base font-bold mb-3">Antal pladser </p><p className="font-bold">{seats}</p>
                </div>
                <div className="space-y-2">
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"

                    />
                </div>
            </div>

            {/* Bagage */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <h3 className="text-base font-bold mb-3">Bagage</h3>
                <div className=" flex flex-row justify-around items-baseline">
                    <label
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => { setBagageSmall(!bagageSmall); setBagageMedium(false); setBagageLarge(false); }}
                    >
                        <BagageSmallIcon isSelected={bagageSmall} />
                        <span className="text-sm text-gray-700">Lille</span>
                    </label>

                    <label
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => { setBagageMedium(!bagageMedium); setBagageSmall(false); setBagageLarge(false); }}
                    >
                        <BagageMediumIcon isSelected={bagageMedium} />
                        <span className="text-sm text-gray-700">Mellem</span>
                    </label>

                    <label
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => { setBagageLarge(!bagageLarge); setBagageSmall(false); setBagageMedium(false); }}
                    >
                        <BagageLargeIcon isSelected={bagageLarge} />
                        <span className="text-sm text-gray-700">Stor</span>
                    </label>
                </div>
            </div>

            {/* Komfort niveau */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <h3 className="font-bold mb-3">Komfort</h3>
                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        checked={comfort}
                        onChange={(e) => setComfort(e.target.checked)}
                    />
                    <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                        Højst 2 personer på bagsædet
                    </label>
                </div>
            </div>

            {/* Præferencer */}
            <div className="mb-4 border-b border-gray-200 pb-4">
                <h3 className="font-bold mb-3">Præferencer</h3>
                <div className="flex items-center gap-1">
                    <input 
                        type="checkbox" 
                        checked={music}
                        onChange={(e) => setMusic(e.target.checked)}
                    />
                    <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                        Musik
                    </label>
                </div>
                <div className="flex items-center gap-1">
                    <input 
                        type="checkbox" 
                        checked={animalsAllowed}
                        onChange={(e) => setAnimalsAllowed(e.target.checked)}
                    />
                    <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                        Dyr
                    </label>
                </div>
                <div className="flex items-center gap-1">
                    <input 
                        type="checkbox" 
                        checked={childrenAllowed}
                        onChange={(e) => setChildrenAllowed(e.target.checked)}
                    />
                    <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                        Børn
                    </label>
                </div>
                <div className="flex items-center gap-1">
                    <input 
                        type="checkbox" 
                        checked={smokingAllowed}
                        onChange={(e) => setSmokingAllowed(e.target.checked)}
                    />
                    <label className="ml-2 text-sm text-gray-700 cursor-pointer">
                        Rygning
                    </label>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button
                    onClick={clearAllFilters}
                    className="w-full bg-blue-bright text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-medium transition duration-300"
                >
                    Nulstil
                </button>
            </div>
        </div>
    );
};

