export class RoomDto{
    readonly room_id: string;
    readonly room_name: string;
    readonly owner: string;
    readonly questions: string[];
    readonly type: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly isDisabled: boolean;
}