import { ListingClient, CommerceCatalog, AtellixClient } from '@atellix/catalog'
import anchor from '@coral-xyz/anchor'
async function main() {
    const listingClient = new ListingClient()
    const categories = await listingClient.getCategoryList({})
    for (var category of categories.categories) {
        console.log(JSON.stringify(category, null, 4))
    }
}
main().then(() => {})
