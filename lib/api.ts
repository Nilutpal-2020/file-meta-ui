/**
 * API client for file metadata extraction
 */

export interface MetadataResponse {
    filename: string;
    size: number;
    size_formatted: string;
    mime_type: string;
    checksum_sha256: string;
    extension: string;
    created_at: string;
    last_modified: string;
    processing_time_ms: number;
    metadata?: Record<string, any>;
}

export interface ApiError {
    error: string;
    message?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Upload a file to the metadata extraction API
 * @param file - File to upload
 * @returns Promise with metadata response
 * @throws Error if upload fails
 */
export async function uploadFileForMetadata(file: File): Promise<MetadataResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${API_BASE_URL}/v1/metadata`, {
            method: 'POST',
            headers: {
                'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
            },
            body: formData,
        });

        if (!response.ok) {
            // Try to parse error response
            let errorMessage = `Request failed with status ${response.status}`;
            try {
                const errorData: ApiError = await response.json();
                errorMessage = errorData.message || errorData.error || errorMessage;
            } catch {
                // If JSON parsing fails, use status text
                errorMessage = response.statusText || errorMessage;
            }
            throw new Error(errorMessage);
        }

        const data: MetadataResponse = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            // Check for network errors
            if (error.message === 'Failed to fetch') {
                throw new Error('Unable to connect to the API server. Please ensure the backend is running.');
            }
            throw error;
        }
        throw new Error('An unexpected error occurred');
    }
}
