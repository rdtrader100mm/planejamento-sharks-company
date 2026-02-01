import React, { useState, useEffect } from 'react';
import { slides } from '../presentationData';
import './Presentation.css';

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setDirection('next');
            setCurrentSlide(curr => curr + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setDirection('prev');
            setCurrentSlide(curr => curr - 1);
        }
    };

    const slide = slides[currentSlide];

    if (!slide) return <div className="error">Slide não encontrado</div>;

    return (
        <div className="presentation-container">
            <div className={`slide-content key-${slide.id} fade-in`}>
                {renderSlideContent(slide)}
            </div>

            <div className="navigation-controls">
                <button onClick={prevSlide} disabled={currentSlide === 0}>←</button>
                <span className="slide-indicator">{currentSlide + 1} / {slides.length}</span>
                <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>→</button>
            </div>

            <div className="watermark">PB & RN FOODS</div>
        </div>
    );
};

const renderSlideContent = (slide) => {
    try {
        switch (slide.type) {
            case 'cover':
                return (
                    <div className="slide-cover">
                        <div className="brand-badge">{slide.brand}</div>
                        <h1 className="main-title">{slide.title}</h1>
                        <h2 className="subtitle">{slide.subtitle}</h2>
                        <div className="decoration-line"></div>
                    </div>
                );

            case 'content':
                return (
                    <div className="slide-standard">
                        <h2 className="slide-title">{slide.title}</h2>
                        <div className="content-split">
                            {slide.layout === 'cards' ? (
                                <div className="cards-grid">
                                    {slide.points && slide.points.map((item, idx) => (
                                        <div className="card" key={idx}>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : slide.layout === 'list' ? (
                                <ul className="big-list">
                                    {slide.points && slide.points.map((point, idx) => (
                                        <li key={idx}>
                                            <span className="check-icon">✓</span> {point.replace('✅ ', '')}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <>
                                    <div className="text-block">
                                        <p className="main-text">{slide.content}</p>
                                    </div>
                                    <div className="points-block">
                                        <ul>
                                            {slide.points && slide.points.map((point, idx) => (
                                                <li key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                                                    <span className="bullet">›</span> {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                );

            case 'funnel':
                return (
                    <div className="slide-standard">
                        <h2 className="slide-title">{slide.title}</h2>
                        <p className="slide-subtitle">{slide.subtitle}</p>
                        <div className="funnel-container">
                            {slide.stages && slide.stages.map((stage, idx) => (
                                <div
                                    className="funnel-stage"
                                    key={idx}
                                    style={{
                                        backgroundColor: stage.color,
                                        width: `${100 - (idx * 20)}%`
                                    }}
                                >
                                    <span className="stage-name">{stage.name}</span>
                                    <span className="stage-desc">{stage.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'mascot':
                return (
                    <div className="slide-standard">
                        <h2 className="slide-title">{slide.title}</h2>
                        <div className="mascot-layout">
                            <div className="mascot-text">
                                <p className="highlight-text">{slide.content}</p>
                                <ul>
                                    {slide.details && slide.details.map((d, i) => <li key={i}>{d}</li>)}
                                </ul>
                            </div>
                            <div className="mascot-placeholder">
                                <img src="/mascot.png" alt="Mascote Concept" className="mascot-image" />
                            </div>
                        </div>
                    </div>
                );

            case 'mascot-apps':
                return (
                    <div className="slide-standard">
                        <h2 className="slide-title">{slide.title}</h2>
                        <div className="apps-grid">
                            {slide.items && slide.items.map((item, idx) => (
                                <div className="app-item" key={idx}>
                                    <div className="app-icon">{item.icon}</div>
                                    <div className="app-name">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'roadmap':
                return (
                    <div className="slide-standard">
                        <h2 className="slide-title">{slide.title}</h2>
                        <div className="roadmap-container">
                            {slide.steps && slide.steps.map((step, idx) => (
                                <div className="roadmap-step" key={idx}>
                                    <div className="step-circle"></div>
                                    <div className="step-content">
                                        <div className="step-phase">{step.phase}</div>
                                        <div className="step-time">{step.time}</div>
                                        <div className="step-task">{step.task}</div>
                                    </div>
                                </div>
                            ))}
                            <div className="roadmap-line"></div>
                        </div>
                    </div>
                );

            default:
                return <div>Slide Type Not Found: {slide.type}</div>;
        }
    } catch (error) {
        console.error("Render error:", error);
        return <div className="error">Erro ao renderizar slide: {error.message}</div>;
    }
};

export default Presentation;
