import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Image from './image';

describe('<Image />', () => {

    it('renders an img correctly', () => {
        const component = shallow(<Image src="https://test" alt="" />);
        expect(component.find('img[src="https://test"]')).toHaveLength(1);
    });

    it('renders a spinner correctly', () => {
        const component = shallow(<Image src="https://test" alt="" />);
        expect(component.find('span.spinner')).toHaveLength(1);
        expect(component.find('span.spinner.hidden')).toHaveLength(0);
    });

    it('hides the spinner once loaded', () => {
        const component = shallow(<Image src="https://test" alt="" />);
        component.find('img').simulate('load');
        expect(component.find('span.spinner.hidden')).toHaveLength(1);
    });

    it('expands the image once clicked', () => {
        const component = shallow(<Image src="https://test" alt="" />);
        expect(component.hasClass('expanded')).toBe(false);
        component.simulate('click');
        expect(component.hasClass('expanded')).toBe(true);
    });

    it('reduces the image on click', () => {
        const component = shallow(<Image src="https://test" alt="" />);
        component.simulate('click');
        component.simulate('click');
        expect(component.hasClass('expanded')).toBe(false);
    });

})
