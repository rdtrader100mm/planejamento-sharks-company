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

        case 'project-objectives':
            return (
                <div className="slide slide-objectives">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="objectives-grid">
                        {slide.items.map((item, idx) => (
                            <div key={idx} className="objective-card">
                                <span className="objective-icon">{item.icon}</span>
                                <h3 className="objective-title">{item.title}</h3>
                                <p className="objective-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'market-regional':
            return (
                <div className="slide slide-market-regional">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="regional-content">
                        <div className="regional-bullets">
                            {slide.bullets.map((bullet, idx) => (
                                <div key={idx} className="regional-item">
                                    <div className="regional-icon-wrapper">
                                        <span className="regional-icon">{bullet.icon}</span>
                                    </div>
                                    <p className="regional-text">{bullet.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );

        case 'implemented-grouped':
            return (
                <div className="slide slide-implemented-grouped">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="grouped-grid">
                        {slide.groups.map((group, idx) => (
                            <div key={idx} className="group-col" style={{ borderTop: `4px solid ${group.color}` }}>
                                <h3 className="group-title" style={{ color: group.color }}>{group.title}</h3>
                                <div className="group-list">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="group-item done">
                                            <span className="check-icon">✓</span>
                                            <span className="item-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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

        case 'roadmap-layered':
            return (
                <div className="slide slide-roadmap-layered">
                    <div className="slide-header">
                        <h2 className="section-title">{slide.title}</h2>
                        <p className="section-subtitle">{slide.subtitle}</p>
                    </div>
                    <div className="roadmap-layers">
                        {slide.layers.map((layer, idx) => (
                            <div key={idx} className="roadmap-layer">
                                <div className="layer-header">
                                    <span className="layer-icon">{layer.icon}</span>
                                    <span className="layer-name">{layer.category}</span>
                                </div>
                                <div className="layer-actions">
                                    {layer.actions.map((action, i) => (
                                        <div key={i} className="action-tag">{action}</div>
                                    ))}
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
