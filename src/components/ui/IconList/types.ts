export interface IconListProps {
	items: Array<ListItem>
}

export interface ListItem {
	title: string
	description?: string
	iconPath: string
}
