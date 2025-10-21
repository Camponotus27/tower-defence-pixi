import { describe, expect, it } from "vitest";

describe("🧱 Clases y modificadores — public/private/protected/static/get/set (AAA)", () => {
  it("public/private/get/set: encapsulación simple", () => {
    // Organizar
    class Cuenta {
      public titular: string;
      private _saldo: number = 0;

      constructor(titular: string) {
        this.titular = titular;
      }

      get saldo() {
        return this._saldo;
      }

      set saldo(valor: number) {
        if (valor < 0) throw new Error("Saldo negativo");
        this._saldo = valor;
      }

      depositar(monto: number) {
        this.saldo = this._saldo + monto;
      }
    }

    // Acción
    const c = new Cuenta("Camila");
    c.depositar(100);

    // Esperado
    expect(c.titular).toBe("Camila");
    expect(c.saldo).toBe(100);
    // @ts-expect-error _saldo es privado
    // c._saldo = 999;
  });

  it("protected y herencia + super()", () => {
    // Organizar
    class Base {
      protected formatear(msg: string) {
        return `[Base] ${msg}`;
      }
    }

    class Hija extends Base {
      saludar() {
        return this.formatear("hola");
      }
    }

    // Acción
    const h = new Hija();
    const texto = h.saludar();

    // Esperado
    expect(texto).toBe("[Base] hola");
    // @ts-expect-error formatear es protected, no desde instancia
    // h.formatear("x");
  });

  it("static y readonly: miembros de clase y constantes", () => {
    // Organizar
    class Config {
      static readonly version = "1.0.0";
      readonly nombre: string;

      constructor(nombre: string) {
        this.nombre = nombre;
      }
    }

    // Acción
    const conf = new Config("App");

    // Esperado
    expect(Config.version).toBe("1.0.0");
    expect(conf.nombre).toBe("App");
    // @ts-expect-error version es readonly
    // Config.version = "2.0.0";
  });
});
