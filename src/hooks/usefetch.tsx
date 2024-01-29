import { useEffect, useRef, useState } from "react";

interface fetchInterface<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}

export default function useFetch<T>(
	url: RequestInfo,
	options?: RequestInit,
): fetchInterface<T> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const optionsRef = useRef(options);
	optionsRef.current = options;

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(url, {
					signal,

					...optionsRef.current,
				});
				console.log(response);
				if (!response.ok) throw new Error(response.statusText);

				if (!signal.aborted) {
					const json = await response.json();
					setData(json);
				}
			} catch (err) {
				if (!signal.aborted && err instanceof Error) setError(err.message);
			} finally {
				if (!signal.aborted) setLoading(false);
			}
		};
		fetchData();
		return () => {
			controller.abort();
		};
	}, [url, options]);

	return {
		data,
		loading,
		error,
	};
}
