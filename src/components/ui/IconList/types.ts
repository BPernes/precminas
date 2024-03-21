export interface IconListProps {
	items: Array<ListItem>
	orientation: 'row' | 'column'
}

export interface ListItem {
	title: string
	description?: string
	iconPath: string
}
