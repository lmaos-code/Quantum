import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Sidebar from '$lib/components/Sidebar.svelte';
import StockList from '$lib/components/StockList.svelte';

describe('Sidebar Component', () => {
	test('should render navigation items', () => {
		render(Sidebar);
		expect(screen.getByText('Market')).toBeInTheDocument();
		expect(screen.getByText('Dashboard')).toBeInTheDocument();
		expect(screen.getByText('Analytics')).toBeInTheDocument();
	});

	test('should render user profile', () => {
		render(Sidebar);
		expect(screen.getByText('Maciej Kalaska')).toBeInTheDocument();
	});
});

describe('StockList Component', () => {
	test('should render stock list', () => {
		render(StockList);
		expect(screen.getByText('Watchlist')).toBeInTheDocument();
	});

	test('should display multiple stocks', () => {
		render(StockList);
		expect(screen.getByText('AAPL')).toBeInTheDocument();
		expect(screen.getByText('GOOGL')).toBeInTheDocument();
	});
});
