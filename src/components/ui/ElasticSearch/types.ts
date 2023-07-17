export type ElasticSearchType = {
  title: string
  options: string[]
  changeValue: (newValue: string) => void
}

export type ElasticSearchState = {
  showOptions: boolean
  value: string
  filteredOptions: string[]
}
