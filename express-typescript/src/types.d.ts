export type status = 'Por hacer' | 'En progreso' | 'Hecho';

interface task {
    id: number;
    title: string;
    description: string;
    status: status;
    created_at: Date;
}