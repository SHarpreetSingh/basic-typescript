
//selects only the last 2 days worth of documents.

{
   $match: {
      $expr: {
         $gt: ["$createdDate", {
            $dateSubtract: {
               startDate: "$$NOW",
               unit: "day",
               amount: 2
            }
         }]
      }
   }
}