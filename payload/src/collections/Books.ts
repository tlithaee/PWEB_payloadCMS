import { CollectionConfig } from 'payload/types'

const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'Books_Title',
  },
  access:{
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name : "Books_Title",
      type : "text",
      label : "Judul Buku",
      required : true
    },
    {
      name : "Quantity",
      type : "number",
      label : "Jumlah Buku",
      required : true
    }
  ],
}

export default Books
