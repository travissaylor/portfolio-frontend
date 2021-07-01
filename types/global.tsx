export type IProject = {
    id: number
    title: string
    slug: string
    description: string
    image: string
    status: string
    category: ICategory
}

export type ICategory = {
    id: number
    parent_id?: number | null
    name: string
    slug: string
    deleted_at?: string | null
    created_at: string
    updated_at: string
    lft?: number | null
    rgt?: number | null
    depth?: number | null
}