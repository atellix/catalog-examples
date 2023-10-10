import { ListingClient, CommerceCatalog, AtellixClient } from '@atellix/catalog'
import anchor from '@coral-xyz/anchor'
async function main() {
    const listingClient = new ListingClient()
    console.log(await listingClient.getCategoryList({}))
}
main().then(() => {})
