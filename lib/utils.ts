import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export function validateFile(file: File, options: {
    maxSize?: number;
    allowedTypes?: string[];
} = {}): { valid: boolean; error?: string } {
    const { maxSize = 10 * 1024 * 1024, allowedTypes } = options; // Default 10MB

    if (file.size > maxSize) {
        return {
            valid: false,
            error: `File size exceeds ${formatFileSize(maxSize)} limit`,
        };
    }

    if (allowedTypes && allowedTypes.length > 0) {
        const fileType = file.type || '';
        const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

        const isAllowed = allowedTypes.some(type => {
            // Check MIME type
            if (fileType === type) return true;
            // Check extension
            if (type.startsWith('.') && type.slice(1) === fileExtension) return true;
            // Check wildcard MIME types like "image/*"
            if (type.includes('/*')) {
                const baseType = type.split('/')[0];
                return fileType.startsWith(baseType + '/');
            }
            return false;
        });

        if (!isAllowed) {
            return {
                valid: false,
                error: 'File type not allowed',
            };
        }
    }

    return { valid: true };
}

export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
}
