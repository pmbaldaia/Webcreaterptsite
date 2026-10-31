/** Imagens WebP locais, sem cortes e com variantes responsivas. */
export interface PortfolioImage {
  thumbnails: string
  imageWidth: number
  imageHeight: number
}

export function imageUrl(file: string, width?: number): string {
  const stem = file.replace(/\.webp$/, '')
  return `/images/work/${stem}${width ? `-${width}` : ''}.webp`
}

export function imageSrcSet(item: PortfolioImage): string {
  const variants = [480, 960, 1440].filter((width) => width < item.imageWidth)
  return [
    ...variants.map((width) => `${imageUrl(item.thumbnails, width)} ${width}w`),
    `${imageUrl(item.thumbnails)} ${item.imageWidth}w`,
  ].join(', ')
}
