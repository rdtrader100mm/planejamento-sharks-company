import React, { useState, useEffect, useRef } from 'react';
import { slides } from '../presentationData';
import './Presentation.css';

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'f' || e.key === 'F') {
                toggleFullscreen();
            } else if (e.key === 'Escape' && isFullscreen) {
                exitFullscreen();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, isFullscreen]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(curr => curr + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(curr => curr - 1);
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const exitFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };

    const slide = slides[currentSlide];

    if (!slide) return <div className="error">Slide não encontrado</div>;

    return (
        <div className={`presentation-container ${isFullscreen ? 'is-fullscreen' : ''}`} ref={containerRef}>
            <div className="slide-wrapper" key={slide.id}>
                {renderSlideContent(slide)}
            </div>

            <div className="nav-bar">
                <div className="nav-dots">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`nav-dot ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(idx)}
                            title={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>
                <div className="nav-controls">
                    <button className="nav-btn" onClick={prevSlide} disabled={currentSlide === 0} title="Anterior (←)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15,18 9,12 15,6" />
                        </svg>
                    </button>
                    <span className="nav-indicator">{currentSlide + 1} / {slides.length}</span>
                    <button className="nav-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1} title="Próximo (→)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9,6 15,12 9,18" />
                        </svg>
                    </button>
                    <div className="nav-divider"></div>
                    <button className="nav-btn fullscreen-btn" onClick={toggleFullscreen} title="Tela cheia (F)">
                        {isFullscreen ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

const renderSlideContent = (slide) => {
    switch (slide.type) {
        case 'hero':
            return (
                <div className="slide slide-hero">
                    <div className="hero-bg-overlay"></div>
                    <div className="hero-content">
                        <div className="hero-logos">
                            {slide.logos && slide.logos.map((logo, idx) => (
                                <img key={idx} src={logo} alt="Logo" className="hero-logo" />
                            ))}
                        </div>
                        <h1 className="hero-headline">{slide.headline}</h1>
                        <p className="hero-tagline">{slide.tagline}</p>
                        <div className="hero-line"></div>
                    </div>
                </div>
            );

        case 'about':
            return (
                <div className="slide slide-about">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-desc">{slide.description}</p>
                    </div>
                    <div className="about-content">
                        <div className="stats-grid">
                            {slide.stats.map((stat, idx) => (
                                <div key={idx} className="stat-card">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="differentials-grid">
                            {slide.differentials.map((diff, idx) => (
                                <div key={idx} className="differential-item">
                                    <span className="diff-icon">{diff.icon}</span>
                                    <span className="diff-text">{diff.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );

        case 'market':
            return (
                <div className="slide slide-market">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="market-grid">
                        {slide.opportunities.map((opp, idx) => (
                            <div key={idx} className="market-card">
                                <span className="market-number">{opp.number}</span>
                                <span className="market-text">{opp.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'diagnosis':
            return (
                <div className="slide slide-diagnosis">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="diagnosis-comparison">
                        <div className="diagnosis-column before">
                            <div className="column-header">
                                <span className="column-icon">❌</span>
                                <span className="column-label">Antes</span>
                            </div>
                            <ul className="diagnosis-list">
                                {slide.before.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="diagnosis-arrow">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path d="M10 30 L50 30 M40 20 L50 30 L40 40" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="diagnosis-column after">
                            <div className="column-header">
                                <span className="column-icon">✅</span>
                                <span className="column-label">Depois</span>
                            </div>
                            <ul className="diagnosis-list">
                                {slide.after.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            );

        case 'funnel-modern':
            return (
                <div className="slide slide-funnel">
                    <div className="slide-header-center">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="funnel-visual-container">
                        <div className="funnel-shape">
                            {slide.stages.map((stage, idx) => (
                                <div
                                    key={idx}
                                    className={`funnel-level funnel-level-${idx + 1}`}
                                    style={{ '--stage-color': stage.color }}
                                >
                                    <div className="funnel-level-content">
                                        <div className="funnel-level-header">
                                            <span className="funnel-stage-name">{stage.name}</span>
                                            <span className="funnel-stage-label">{stage.label}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="funnel-details">
                            {slide.stages.map((stage, idx) => (
                                <div key={idx} className="funnel-detail-card" style={{ '--stage-color': stage.color }}>
                                    <div className="detail-header">
                                        <span className="detail-icon">{idx === 0 ? '📢' : idx === 1 ? '🎯' : '💰'}</span>
                                        <span className="detail-name">{stage.name} – {stage.label}</span>
                                    </div>
                                    <ul className="detail-items">
                                        {stage.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );

        case 'implemented':
            return (
                <div className="slide slide-implemented">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="implemented-grid">
                        {slide.items.map((item, idx) => (
                            <div key={idx} className={`implemented-card ${item.status}`}>
                                <span className="check-badge">✓</span>
                                <span className="implemented-text">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'roadmap-timeline':
            return (
                <div className="slide slide-roadmap">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-line"></div>
                        {slide.phases.map((phase, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="timeline-phase">{phase.phase}</span>
                                    <h3 className="timeline-title">{phase.title}</h3>
                                    <ul className="timeline-tasks">
                                        {phase.tasks.map((task, i) => (
                                            <li key={i}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'mascot-concept':
            return (
                <div className="slide slide-mascot">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="mascot-content">
                        <div className="mascot-info">
                            <p className="mascot-concept">{slide.concept}</p>
                            <div className="mascot-applications">
                                {slide.applications.map((app, idx) => (
                                    <div key={idx} className="mascot-app">
                                        <span className="app-icon">{app.icon}</span>
                                        <div className="app-details">
                                            <span className="app-name">{app.name}</span>
                                            <span className="app-desc">{app.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mascot-visual">
                            <img src="/mascot.png" alt="Mascote" className="mascot-img" />
                        </div>
                    </div>
                </div>
            );

        case 'solutions':
            return (
                <div className="slide slide-solutions">
                    <div className="slide-header-center">
                        <img src="/logo-sharks.png" alt="Sharks Company" className="solutions-logo" />
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="solutions-grid">
                        {slide.services.map((service, idx) => (
                            <div key={idx} className="solution-card">
                                <span className="solution-icon">{service.icon}</span>
                                <h3 className="solution-name">{service.name}</h3>
                                <p className="solution-desc">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'closing':
            return (
                <div className="slide slide-closing">
                    <div className="closing-bg-overlay"></div>
                    <div className="closing-content">
                        <h1 className="closing-headline">{slide.headline}</h1>
                        <p className="closing-tagline">{slide.tagline}</p>
                        <div className="closing-line"></div>
                        <p className="closing-cta">{slide.cta}</p>
                        <div className="closing-logos">
                            {slide.logos && slide.logos.map((logo, idx) => (
                                <img key={idx} src={logo} alt="Logo" className="closing-logo" />
                            ))}
                        </div>
                    </div>
                </div>
            );

        default:
            return <div className="error">Tipo de slide não encontrado: {slide.type}</div>;
    }
};

export default Presentation;
