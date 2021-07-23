import { idToUuid } from 'notion-utils'
import { ReturnGetAllPostsParams} from './getAllPosts'

export default function getAllPageIds(collectionQuery: ReturnGetAllPostsParams['collectionQuery'], viewId?: string): string[] {
  const views = Object.values(collectionQuery)[0]
  let pageIds = []
  if (viewId) {
    const vId = idToUuid(viewId)
    pageIds = views[vId]?.blockIds
  } else {
    const pageSet = new Set<string>()
    Object.values(views).forEach(view => {
      view?.blockIds?.forEach(id => pageSet.add(id))
    })
    pageIds = Array.from(pageSet)
  }
  return pageIds
}
