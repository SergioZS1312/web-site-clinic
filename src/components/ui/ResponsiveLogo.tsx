interface ResponsiveLogoProps {
  className?: string;
  alt?: string;
}

export const ResponsiveLogo = ({
  className = "h-10",
  alt = "EDECON Logo"
}: ResponsiveLogoProps) => {
  const logoWebp = "/edecon-logo-color2.webp";
  const logoPng = "/edecon-logo-color2.png";

  return (
    <picture>
      {/* Fuente en formato WebP (recomendado para navegadores modernos) */}
      <source
        srcSet={logoWebp}
        type="image/webp"
      />
      {/* Imagen de respaldo en PNG (formato universal) */}
      <img
        src={logoPng}
        alt={alt}
        className={className}
        loading="eager"
        decoding="async"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = logoPng;
        }}
      />
    </picture>
  );
};

export default ResponsiveLogo;
