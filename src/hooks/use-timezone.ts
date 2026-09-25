export interface CurrentTimeDetails {
    targetDate: Date;
    userTime: string;
    targetTime: string;
    userTimestamp: number;
    targetTimestamp: number;
    direction: 'ahead' | 'behind' | 'same';
    difference: string;
}

export function getCurrentTimeDetails(targetTimezone: string): CurrentTimeDetails {
    const userTimezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };

    const userTime = now.toLocaleTimeString('en-US', { ...timeOptions, timeZone: userTimezone });
    const targetTime = now.toLocaleTimeString('en-US', { ...timeOptions, timeZone: targetTimezone });
    const targetDate = new Date(now.toLocaleString('en-US', { timeZone: targetTimezone }));

    const parseOffset = (tz: string, date: Date): number => {
        const tzString = date.toLocaleString('en-US', { timeZone: tz, timeZoneName: 'longOffset' });
        const match = tzString.match(/GMT([+-])(\d+):(\d+)/);
        if (!match) return 0;
        const [_, sign, hours, minutes] = match;
        const totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
        return sign === '+' ? totalMinutes : -totalMinutes;
    };

    const userOffset = parseOffset(userTimezone, now);
    const targetOffset = parseOffset(targetTimezone, now);

    const rawDiff = targetOffset - userOffset;
    const absDiff = Math.abs(rawDiff);

    let direction: 'ahead' | 'behind' | 'same' = 'same';
    if (rawDiff > 0) direction = 'ahead';
    if (rawDiff < 0) direction = 'behind';

    const hours = Math.floor(absDiff / 60);
    const minutes = absDiff % 60;

    let difference = '0m';
    if (hours > 0 && minutes > 0) {
        difference = `${hours}h ${minutes}m`;
    } else if (hours > 0) {
        difference = `${hours}h`;
    } else if (minutes > 0) {
        difference = `${minutes}m`;
    }

    const userTimestamp = now.getTime();
    const targetTimestamp = now.getTime() + (rawDiff * 60 * 1000);

    return {
        targetDate,
        userTime,
        targetTime,
        userTimestamp,
        targetTimestamp,
        direction,
        difference
    };
}

export function getGreetingMessage(date = new Date()): string {
    const hour = date.getHours();

    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
}