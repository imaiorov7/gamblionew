import { cn } from "@/lib/utils";

export default function TrustedBy() {
  return (
    <>
      <div className="py-12 md:mx-7 mx-3 border-x">
        <p className="text-center text-muted-foreground text-lg font-medium">
          Trusted by
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  md:mx-7 mx-3">
        {PARTNERS.map((e, index) => {
          return (
            <div
              key={index}
              className={cn(
                "w-full  border-t-0 h-36 border-[0.5px] border-dashed flex justify-center items-center",
                index > 3 && "border-b-0",
                index < 4 && "border-t-0"
              )}
            >
              <img
                src={e}
                className="grayscale-100 brightness-0 dark:invert-100 md:w-36 w-24"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="md:mx-7 mx-3 border-x h-12"></div>
    </>
  );
}

const PARTNERS = [
  "https://admiralbet.me/assets/images/cms/LsQ5AJm.svg",
  "https://www.infoplay.info/fotos/noticias/2024/12/NOVOMATIC-reafirma-su-compromiso-global-con-la-proteccion-del-jugador-mediante-una-certificacion-internacional-1.gif",
  "https://www.infoplay.info/fotos/noticias/2024/12/NOVOMATIC-reafirma-su-compromiso-global-con-la-proteccion-del-jugador-mediante-una-certificacion-internacional-1.gif",
  "https://www.infoplay.info/fotos/noticias/2024/12/NOVOMATIC-reafirma-su-compromiso-global-con-la-proteccion-del-jugador-mediante-una-certificacion-internacional-1.gif",
  "https://www.infoplay.info/fotos/noticias/2024/12/NOVOMATIC-reafirma-su-compromiso-global-con-la-proteccion-del-jugador-mediante-una-certificacion-internacional-1.gif",
  "https://admiralbet.me/assets/images/cms/LsQ5AJm.svg",

  "https://admiralbet.me/assets/images/cms/LsQ5AJm.svg",

  "https://admiralbet.me/assets/images/cms/LsQ5AJm.svg",
];
