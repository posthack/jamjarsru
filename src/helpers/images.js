export const preloadImages = (images) => {
  const promises = images.map((image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  return Promise.all(promises);
};
