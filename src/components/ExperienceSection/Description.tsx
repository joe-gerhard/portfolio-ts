import React from "react";
import { StyledDescription } from "./styles";
import { JOBS } from "../../constants/jobs";

const Description = ({ selected }) => {
    const job = JOBS[selected];

    return (
        <StyledDescription>
            <h3>{job.title}</h3>
            <h4>
                {job.location} | {job.dates}
            </h4>
            <ul>
                {job.description.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))}
            </ul>
        </StyledDescription>
    );
};

export default Description;
