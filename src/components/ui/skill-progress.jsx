import React from 'react';

const SkillProgress = ({ name, percentage }) => {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="font-accent font-medium text-foreground">{name}</span>
                <span className="font-accent font-medium text-accent">{percentage}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full">
                <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default SkillProgress;