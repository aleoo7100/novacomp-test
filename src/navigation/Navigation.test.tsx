import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../../App';

describe('Navigation', () => {
  it('should render home screen as initial route', () => {
    const {getByText} = render(<App />);

    expect(getByText('Bienvenido')).toBeTruthy();
  });

  it('should navigate to Tasks screen', () => {
    const {getByText, getByTestId} = render(<App />);

    fireEvent.press(getByTestId('taskBtn'));
    expect(getByText('Nueva tarea')).toBeTruthy();
  });

  it('should navigate to List screen', () => {
    const {getByTestId} = render(<App />);

    fireEvent.press(getByTestId('listBtn'));
    expect(getByTestId('loadingId')).toBeTruthy();
  });
});
