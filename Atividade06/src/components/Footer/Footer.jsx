import { DivFooter, PhoneSection, P, MainSections, Section, A, Select } from "./FooterStyles";
const Footer = () => {
    return (
        <DivFooter>
            <PhoneSection>
                <P>Dúvidas? Ligue 0800 591 2876</P>
            </PhoneSection>
            <MainSections>
                <Section>
                    <A href="#">Perguntas Frequentes</A>
                    <A href="#">Preferência de Cookies</A>
                    <Select>
                        <option>Português</option>
                        <option>English</option>
                    </Select>
                </Section>
                <Section>
                    <A href="#">Central de Ajuda</A>
                    <A href="#">Perguntas Frequentes</A>
                </Section>
                <Section>
                    <A href="#">Termos de Uso</A>
                </Section>
                <Section>
                    <A href="#">Privacidade</A>
                </Section>
            </MainSections>
        </DivFooter>
    );
};

export default Footer;