import {Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Car {
    @Field()
    id: string;

    @Field()
    mark: string;

    @Field()
    model: string;

    @Field(type => Int)
    productionYear: number;
}
