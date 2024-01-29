import { Parallax } from 'react-parallax';

const Cover = ({img,title,des}) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[600px] object-cover">
                    <div className="hero-overlay bg-opacity-50 h-[300px] max-w-5xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 font-serif text-5xl font-bold">{title}</h1>
                            <p className="mb-5 font-serif">{des}</p>
                          
                        </div>
                    </div>
                </div>
            </Parallax >
        </div>

    );
};

export default Cover;