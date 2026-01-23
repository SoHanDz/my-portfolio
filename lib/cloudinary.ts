export const getCloudinaryUrl = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number | 'auto';
    format?: 'auto' | 'webp' | 'avif';
  }
) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  // Return placeholder if no cloud name or publicId
  if (!cloudName || !publicId) {
    return '/images/placeholder.png'; // hoặc return null
  }

  const transforms = [
    options?.format ? `f_${options.format}` : 'f_auto',
    options?.quality ? `q_${options.quality}` : 'q_auto',
    options?.width && `w_${options.width}`,
    options?.height && `h_${options.height}`,
  ].filter(Boolean).join(',');

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
};

export const IMAGE_SIZES = {
  thumbnail: 400,
  card: 800,
  hero: 1200,
  full: 1920,
} as const;