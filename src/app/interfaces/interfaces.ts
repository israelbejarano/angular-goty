export interface Game {
    id: string;
    name: string;
    url: string;
    votos: number;
}

export interface VotoResp {
    ok: boolean;
    mensaje: string;
}

export interface JuegoGrafica {
    name: string;
    value: number;
}
