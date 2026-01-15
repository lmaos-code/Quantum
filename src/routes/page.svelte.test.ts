import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render stock trading platform', () => {
		render(Page);
		expect(screen.getByText('Apple Inc.')).toBeInTheDocument();
	});

	test('should render sidebar navigation', () => {
		render(Page);
		expect(screen.getByText('Widelab')).toBeInTheDocument();
		expect(screen.getByText('Market')).toBeInTheDocument();
	});

	test('should display stock price information', () => {
		render(Page);
		expect(screen.getByText('AAPL')).toBeInTheDocument();
		expect(screen.getByText('$133.15')).toBeInTheDocument();
	});

	test('should render buy and sell buttons', () => {
		render(Page);
		expect(screen.getByRole('button', { name: 'Buy' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Sell' })).toBeInTheDocument();
	});
});
