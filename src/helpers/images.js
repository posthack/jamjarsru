export const preloadImages = (images, maxImages = 6) => {
  const promises = images.slice(0, maxImages).map((image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  return Promise.all(promises);
};
