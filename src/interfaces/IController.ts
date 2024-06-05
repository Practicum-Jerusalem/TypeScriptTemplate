interface IController {
    read(filter: any): { email: string }[]
}