export type actionDataProps = {
    id: number,
    name: string,
    description: string | null,
    initialDate: string | null,
    status: string,
    createdAt: string,
    updatedAt: string,
};

export type actionsDataProps = actionDataProps[];
