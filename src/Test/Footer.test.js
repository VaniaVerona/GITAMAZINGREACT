import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';


describe('<Footer/>', () => {

    test('El componente Footer muestra iconos de redes sociales ', () => {
        render(<Footer />);

        const facebookIcon = screen.getByAltText('facebook');
        const instagramIcon = screen.getByAltText('instagram');
        const whatsappIcon = screen.getByAltText('whatsapp');

        expect(facebookIcon).toBeInTheDocument();
        expect(instagramIcon).toBeInTheDocument();
        expect(whatsappIcon).toBeInTheDocument();
    });

    test('Muestra la palabra "COHORT"', () => {
        render(<Footer />);

        const cohortText = screen.getByText('COHORT');

        expect(cohortText).toBeInTheDocument();
    });

});