import { StyledHomeSection, Card } from "./styles";
import Button from "../Button";
import { emailMe } from "../../utils";

export default function HomeSection() {
    return (
        <StyledHomeSection>
            <Card>
                <h1>
                    <span>Hi, my name is</span>
                    <br />
                    Joe Gerhard
                </h1>
                <p>
                    I'm a frontend developer with a proven track record of over
                    4 years of translating system requirements into the design
                    and development of customized systems in an agile
                    environment. I transitioned from a successful 10-year career
                    in the music industry, bringing road-tested expertise in
                    lighting design, audio engineering, and tour management. Now
                    I'm ready to bring a wealth of technical skills and a rich
                    creative sensibility to the next level of web development
                    challenges.
                </p>
                <Button $dark onClick={emailMe}>
                    Get in Touch
                </Button>
            </Card>
        </StyledHomeSection>
    );
}
