import React from 'react';
import './PasswordStrength.css';

const PasswordStrength = ({ password = "" }) => {

    // Logic to determine strength based on password complexity
    const getStrength = (p) => {
        if (!p) return { score: 0, label: "" };

        let score = 0;

        // 1. Length check
        if (p.length > 5) score++;
        if (p.length > 8) score++;

        // 2. Complexity checks (contains numbers/symbols)
        if (/[0-9]/.test(p) && /[!@#$%^&*]/.test(p)) score++;

        // 3. Mixed case check
        if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score++;

        // Map score to label and state class
        if (score <= 1) return { score: 1, label: "weak", class: "weak" };
        if (score <= 2) return { score: 2, label: "medium", class: "medium" };
        if (score <= 3) return { score: 3, label: "good", class: "strong" };
        return { score: 4, label: "strong", class: "strong" };
    };

    const { score, label, class: stateClass } = getStrength(password);

    // If no password typed, don't show the meter
    if (!label) return <div style={{ height: '14px', margin: '-10px 0 10px 0' }}></div>;

    return (
        <div className={`strength-meter-container ${stateClass}`}>
            {/* The 4 Bars */}
            <div className="strength-bars">
                {[1, 2, 3, 4].map((bar) => (
                    <div
                        key={bar}
                        className={`strength-bar ${bar <= score ? 'filled' : ''}`}
                    ></div>
                ))}
            </div>

            {/* The Text Label */}
            <span className="strength-text">{label}</span>
        </div>
    );
};

export default PasswordStrength;